package com.gts.country.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.gts.country.model.GTSCountry;

@Service
public interface GtsCountryService {
	
	List<GTSCountry> getAllGTSCountries();
	Optional<GTSCountry> findByCountryId(int id);
	List<GTSCountry> findByCountryName(String country_name);
	
	String addGtsCountry(GTSCountry gtsCountry);
	String updateGtsCountry(GTSCountry gtsCountry);
	
	String deleteGtsCountry(int id);
	String deleteAllGtsCountries();
	

}
