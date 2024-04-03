<?php
    //ADD NEW DONUT
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $_POST = json_decode(file_get_contents('php://input'), true);
        $id = $_POST['id'];
        $name = $_POST['name'];
        $desc = $_POST['desc'];
        $price = $_POST['price'];
        
        $mysqli = mysqli_connect("localhost", "phpuser", "pa55word", "donutdb");

        //check the connection
        if(mysqli_connect_error()) {
            echo "Failed to connect to MariaDB: " . $mysqli->connect_error;
            die("There was an error connecting to the database");
        }

        $query = "INSERT INTO `donuts` (`ID`, `Name`, `Description`, `Price`) VALUES ('$id', '$name', '$desc', '$price')";
        mysqli_query($mysqli, $query);

        $response['id'] = $id;
        $result = json_encode($response);
        echo $result;
        $mysqli->close();
    }  


    //UPDATE A DONUT
    else if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
        $_PUT = json_decode(file_get_contents('php://input'), true);
        $id = $_PUT['id'];
        $name = $_PUT['name'];
        $desc = $_PUT['desc'];
        $price = $_PUT['price'];
        
        $mysqli = mysqli_connect("localhost", "phpuser", "pa55word", "donutdb");

        //check the connection
        if(mysqli_connect_error()) {
            echo "Failed to connect to MariaDB: " . $mysqli->connect_error;
            die("There was an error connecting to the database");
        }
        
        if ($name != "") {
            $query = "UPDATE `donuts` SET `Name` = '$name' WHERE `donuts`.`ID` = '$id'";
            mysqli_query($mysqli, $query);
        }
        if ($desc != "") {
            $query = "UPDATE `donuts` SET `Description` = '$desc' WHERE `donuts`.`ID` = '$id'";
            mysqli_query($mysqli, $query);
        }
        if ($price != "") {
            $query = "UPDATE `donuts` SET `Price` = '$price' WHERE `donuts`.`ID` = '$id'";
            mysqli_query($mysqli, $query);
        }
        $response['id'] = $id;
        $response['name'] = $name;
        $response['desc'] = $desc;
        $response['price'] = $price;
        $result = json_encode($response);
        echo $result;
        $mysqli->close();
        
    }  

    
    //DELETE A DONUT
    else if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
        $_DELETE = json_decode(file_get_contents('php://input'), true);
        $id = $_DELETE['id'];
        
        $mysqli = mysqli_connect("localhost", "phpuser", "pa55word", "donutdb");

        //check the connection
        if(mysqli_connect_error()) {
            echo "Failed to connect to MariaDB: " . $mysqli->connect_error;
            die("There was an error connecting to the database");
        }

        $query = "SELECT * FROM donuts WHERE `donuts`.`ID` = '$id'";
        $search = mysqli_fetch_assoc( mysqli_query($mysqli, $query) );
        mysqli_query($mysqli, $query);

        $query2 = "DELETE FROM donuts WHERE `donuts`.`ID` = '$id'";
        mysqli_query($mysqli, $query2);

        $response['id'] = $id;
        $response['values'] = $search;
        $result = json_encode($response);
        echo $result;

        //decrement IDs for any ID with a value higher than the deleted entry (must be manually done, SQL won't do it itself)
        $query3 = "SET  @num := 0";
        $query4 = "UPDATE donuts SET ID = @num := (@num+1)";
        mysqli_query($mysqli, $query3);
        mysqli_query($mysqli, $query4);   
        $mysqli->close();
        
    }  
    

    //LOAD CURRENT DB VALUES
    else {
        $mysqli = mysqli_connect("localhost", "phpuser", "pa55word", "donutdb");

        //check the connection
        if(mysqli_connect_error()) {
            echo "Failed to connect to MariaDB: " . $mysqli->connect_error;
            die("There was an error connecting to the database");
        }

        //if we got here, the connection was successful
        $query = "SELECT * FROM donuts";
        $result = mysqli_query($mysqli, $query);

        $json_result = array();
        while($row = mysqli_fetch_assoc($result)) {
            $json_result[] = $row;
        }
        
        print_r(json_encode($json_result));
        $mysqli->close();
    }
?>
