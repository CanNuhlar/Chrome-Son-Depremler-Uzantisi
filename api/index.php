<?php
error_reporting(E_ALL ^ E_NOTICE);
header('Access-Control-Allow-Origin: *');
header('Content-Type: text/html;charset=utf-8');
function utf8_converter($array)
{
    array_walk_recursive($array, function(&$item, $key){
        if(!mb_detect_encoding($item, 'utf-8', true)){
                $item = utf8_encode($item);
        }
    });
 
    return $array;
}
$html = file_get_contents('http://www.koeri.boun.edu.tr/scripts/lst4.asp');

$tag_start = explode("<pre>",$html);
$raw_data = explode("</pre>",$tag_start[1]);
$line = explode("\r", $raw_data[0]);

	
$a = 0;
$t = 0;
for($i = 7; $i <= count($line); $i++){
$earthquake[$a] = explode(" ",$line[$i]);
for($x = 0; $x <= count($earthquake[$a]); $x++){
if($earthquake[$a][$x]!=NULL){
$temp[$a][$t] = $earthquake[$a][$x];
$t++;
}
}
$a++;
$t = 0;
}


for ($i = 0; $i < count($temp)-2; $i++){
$locationraw = array_slice($temp[$i], 8, count($temp[$i]) - 1);
$location = implode(" ", $locationraw);
$info[$i]['date'] = $temp[$i][0];
$info[$i]['time'] = $temp[$i][1];
$info[$i]['latitude'] = $temp[$i][2];
$info[$i]['longitude'] = $temp[$i][3];
$info[$i]['depth'] = $temp[$i][4];
$info[$i]['md'] = $temp[$i][5];
$info[$i]['ml'] = $temp[$i][6];
$info[$i]['mw'] = $temp[$i][7];
$info[$i]['location'] = substr($location,0,-7);
}


//var_dump($info);

//echo '{"earthquakes":';
echo json_encode(utf8_converter($info));
//echo '}';
?>