package com.betterprep.profile_service.profile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/profiles")
public class ProfileController {
  @Autowired
  private ProfileService profileService;

  @GetMapping
  public List<Profile> getAllProfiles() {
    return profileService.getAllProfiles();
  }

  @PostMapping
  public Profile addProfile(@RequestBody Profile profile) {
    return profileService.addProfile(profile);
  }

}
