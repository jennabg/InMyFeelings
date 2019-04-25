<?php
  // Found this code in the noun project documentation. The link is here: https://gist.github.com/hirobert/710f2e22ed803dc34cc0
  require("Classes/TheNounProject.php");

  $cc_key  = "24a5bab9127240e2a9f6f4fb7be52c6d";
  $cc_secret = "9a003f8b4f5d4d8cabc73dc9360d0e96";
  $url = "https://api.thenounproject.com/icons/" . $_POST['search'];
  $args = array();
  $args["limit"] = 10;

  $consumer = new OAuthConsumer($cc_key, $cc_secret);
  $request = OAuthRequest::from_consumer_and_token($consumer, NULL,"GET", $url, $args);
  $request->sign_request(new OAuthSignatureMethod_HMAC_SHA1(), $consumer, NULL);
  $url = sprintf("%s?%s", $url, OAuthUtil::build_http_query($args));
  $ch = curl_init();
  $headers = array($request->to_header());
  curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
  $rsp = curl_exec($ch);
  //return json_encode($rsp);
  //$results = json_decode($rsp);
  //print_r($results);
  echo ($rsp);
?>
