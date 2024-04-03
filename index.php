<?php
    header("Content-Type:application/json");

    //connect
    $mysqli = mysqli_connect("localhost", "phpuser", "pa55word", "donutdb");

    //check the connection
    if(mysqli_connect_error()) {
        echo "Failed to connect to MariaDB: " . $mysqli->connect_error;
        die("There was an error connecting to the database");
    }

    //if we got here, the connection was successful
    $query = "SELECT * FROM donuts ORDER BY donuts.Name ASC";

    //capture the return value of mysqli_query
    //and if it isn't null, we can get the data
    $result = mysqli_query($mysqli, $query);

    $json_result = array();
    while($row = mysqli_fetch_assoc($result)) {
        $json_result[] = $row;
    }
    
    #print_r($json_result);
    #echo '<br><br>';
    
    print_r(json_encode($json_result));
    $mysqli->close();
?>
