######## Apache http server bench marking test ###############
ab -n 2000 -c 1000 -H "Accept: application/json" -H "x-auth-header: f1731729-3bf1-4f25-9584-4befd2fd89f6" -T application/json -p api_data_input.json http://localhost:81/analytics
