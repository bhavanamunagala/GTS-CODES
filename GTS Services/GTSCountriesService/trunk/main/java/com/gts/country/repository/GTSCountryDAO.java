package com.gts.country.repository;

import java.util.List;

import com.gts.country.model.GTSCountry;

public interface GTSCountryDAO<T, S> {
	
	List<GTSCountry> findByName(String country_name);

}
