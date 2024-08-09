package com.betterprep.profile_service.profile;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProfileController {

  @RequestMapping("/")
  @ResponseBody
  public String helloWorld() {
    return "Hello World";
  }

}
