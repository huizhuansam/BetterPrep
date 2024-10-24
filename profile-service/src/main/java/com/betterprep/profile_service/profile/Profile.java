package com.betterprep.profile_service.profile;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "profiles")
public class Profile {

  @Id
  private String username;
  private String email;

  public Profile() {
  }

  public Profile(String username, String email) {
    this.username = username;
    this.email = email;
  }

  public String getUsername() {
    return this.username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEmail() {
    return this.email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

}
