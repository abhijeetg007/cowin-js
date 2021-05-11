var pincodes = [411027, 411026]
var beneficiary = 67349625405990
var captcha = "kkudR"
var doseNumer = 1
var token = ""

data = await fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=363&date=11-05-2021").then(d => d.json())

var validCenters = data.centers.filter(c => pincodes.includes(c.pincode) in c.sessions[0].min_age_limit <45 && c.sessions[0].available_capacity > 0)

if(validCenter.size > 0 ) {

	validCenters.forEach (validCenter => {
		var sessionId = validCenter.sessions[0].session_id
		var centerId = validCenter.center_id

		var response = await fetch("https://cdn-api.co-vin.in/api/v2/appointment/schedule", {
		  "headers": {
		    "accept": "application/json, text/plain, /",
		    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
		    "authorization": "Bearer " + token,
		    "content-type": "application/json",
		    "sec-fetch-dest": "empty",
		    "sec-fetch-mode": "cors",
		    "sec-fetch-site": "cross-site"
		  },
		  "referrer": "https://selfregistration.cowin.gov.in/",
		  "referrerPolicy": "strict-origin-when-cross-origin",
		  "body": "{\"center_id\":"+ centerId +",\"session_id\":\""+ sessionId +"\",\"beneficiaries\":[\"" + beneficiary + "\"],\"slot\":\"09:00AM-11:00AM\",\"captcha\":\""+captcha+"\",\"dose\":"+doseNumber+"}",
		  "method": "POST",
		  "mode": "cors",
		  "credentials": "include"
		});

		console.log(response)

	}
}
