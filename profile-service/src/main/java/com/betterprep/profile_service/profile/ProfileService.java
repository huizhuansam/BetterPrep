package com.betterprep.profile_service.profile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileService {

  @Autowired
  private ProfileRepository profileRepository;

  public List<Profile> getAllProfiles() {
    return profileRepository.findAll();
  }

  public Profile addProfile(Profile profile) {
    return profileRepository.save(profile);
  }

}
