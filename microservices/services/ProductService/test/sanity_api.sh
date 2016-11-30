result=`curl -i -s -H "Accept: application/json" -H "Content-Type: application/json" -H "x-auth-header: f1731729-3bf1-4f25-9584-4befd2fd89f6" -X POST -d '{"AQB":"1","customerId":"264365273","ndh":"1","t":"26/3/2016 14:33:34 2 -60","fid":"38F3F20937B273D2-0152DF2696632FE5","ce":"UTF-8","ns":"tescostores","cdp":"2","g":"D","cc":"GBP","events":"scAdd,event26,event27,event55","products":";51351439;;;event26","v22":"Logged in","c29":"PLP - Search results","v61":"D","pe":"lnk_o","pev2":"Link Track","s":"1366x768","c":"24","j":"1.6","v":"N","k":"Y","bw":"1366","bh":"679","p":"Widevine Content Decryption Module;Shockwave Flash;Chrome PDF Viewer;Native Client;","pid":"D","oid":"Add","oidt":"3","ot":"SUBMIT","AQE":"1","extension":["kafka_topic"]}' http://localhost:81/analytics | grep '200 OK'`
expected="HTTP/1.1 200 OK"
#echo ${#result}
#echo ${#expected} 
echo "Expected: $expected"
echo "Actual: $result"
# echo "Expected: $expected"
# echo "Actual: "$result

# echo $result
# if [ "$result" == "$expected" ]
# 	then 
# 		echo "[PASSED]"
# else
# 	echo "[FAILED]"
# fi
