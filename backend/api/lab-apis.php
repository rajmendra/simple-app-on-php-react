<?php
// Define table names
$LABS_TABLE = "labs";
$PROVIDER_GROUP_TABLE = "provider_group";
$PROVIDER_UNIT_TABLE = "provider_unit";
$TIMEZONE_TABLE = "timezone";


$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode( '/', $uri );

// all of our endpoints start with /person
// everything else results in a 404 Not Found
if ($uri[1] !== 'api') {
    header("HTTP/1.1 404 Not Found");
    exit();
}


// Routes
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Save lab data
    saveLabData();
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Define endpoint-function mapping
    $endpoints = [
        'labs' => 'fetchLabs',
        'provider-groups' => 'fetchProviderGroups',
        'provider-units' => 'fetchProviderUnits',
        'timezones' => 'fetchTimezones',
    ];

    // Check if the requested endpoint exists in the mapping
    $requestUri = $uri[3];
    if (isset($endpoints[$requestUri])) {
        // Call the corresponding function
        call_user_func($endpoints[$requestUri]);
    } else {
        // Unknown endpoint
        http_response_code(404);
        echo json_encode(['error' => 'Not Found']);
    }
}

// Function to save lab data
function saveLabData() {
    global $mysqli, $LABS_TABLE;

    // Read JSON data from the request body
    $data = json_decode(file_get_contents('php://input'), true);

    // Extract lab data
    $labName = $data['labName'];
    $providerGroup = $data['providerGroup'];
    $providerUnit = $data['providerUnit'];
    $address = $data['address'];
    $city = $data['city'];
    $zip = $data['zip'];
    $officePhone = $data['officePhone'];
    $mobile = $data['mobile'];
    $email = $data['email'];
    $timezone = $data['timezone'];

    // Insert data into the labs table
    $stmt = $mysqli->prepare("INSERT INTO $LABS_TABLE (labName, providerGroup, providerUnit, address, city, zip, officePhone, mobile, email, timezone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssssss", $labName, $providerGroup, $providerUnit, $address, $city, $zip, $officePhone, $mobile, $email, $timezone);
    $stmt->execute();
    $stmt->close();

    // Send a response
    echo json_encode(['message' => 'Lab data saved successfully']);
}

// Function to fetch all labs
function fetchLabs() {
    global $mysqli, $LABS_TABLE;
    $result = $mysqli->query("SELECT * FROM $LABS_TABLE");
    $labs = fetchResultAsArray($result);
    echo json_encode($labs);
}

// Function to fetch all provider groups
function fetchProviderGroups() {
    global $mysqli, $PROVIDER_GROUP_TABLE;
    $result = $mysqli->query("SELECT * FROM $PROVIDER_GROUP_TABLE");
    $providerGroups = fetchResultAsArray($result);
    echo json_encode($providerGroups);
}

// Function to fetch all provider units
function fetchProviderUnits() {
    global $mysqli, $PROVIDER_UNIT_TABLE;
    $result = $mysqli->query("SELECT * FROM $PROVIDER_UNIT_TABLE");
    $providerUnits = fetchResultAsArray($result);
    echo json_encode($providerUnits);
}

// Function to fetch all timezones
function fetchTimezones() {
    global $mysqli, $TIMEZONE_TABLE;
    $result = $mysqli->query("SELECT * FROM $TIMEZONE_TABLE");
    $timezones = fetchResultAsArray($result);
    echo json_encode($timezones);
}

// Function to fetch the result as an associative array
function fetchResultAsArray($result) {
    $rows = [];
    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
    return $rows;
}

$mysqli->close();
?>
