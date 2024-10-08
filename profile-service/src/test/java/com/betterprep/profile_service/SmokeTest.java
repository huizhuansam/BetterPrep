package com.betterprep.profile_service;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.betterprep.profile_service.profile.ProfileController;

@SpringBootTest
class SmokeTest {

	@Autowired
	private ProfileController controller;

	@Test
	void contextLoads() throws Exception {
		assertThat(this.controller).isNotNull();
	}

}
