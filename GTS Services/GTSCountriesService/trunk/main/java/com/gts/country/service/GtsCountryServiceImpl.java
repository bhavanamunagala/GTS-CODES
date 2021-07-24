package com.gts.country.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gts.country.model.GTSCountry;
import com.gts.country.repository.GTSCountryRepository;

@Service
public class GtsCountryServiceImpl implements GtsCountryService{

	@Autowired
	private GTSCountryRepository gtsCountryRepository;
	
	@Override
	public List<GTSCountry> getAllGTSCountries() {
		List<GTSCountry> gTSCountries = new ArrayList<>();
		gtsCountryRepository.findAll().forEach(gTSCountries::add);
		return gTSCountries;
	}

	@Override
	public Optional<GTSCountry> findByCountryId(int id) {
		return gtsCountryRepository.findById(id);
	}
	
	@Override
	public List<GTSCountry> findByCountryName(String countryName) {
        
		return gtsCountryRepository.findByName(countryName);

	}

	@Override
	public String addGtsCountry(GTSCountry gtsCountry) {

		JSONObject jsonObject = new JSONObject();
		try {
			gtsCountryRepository.save(gtsCountry);
			jsonObject.put("success", Boolean.TRUE);
			jsonObject.put("message", "Gts Country(s) created successfully");
			jsonObject.put("status_code", HttpStatus.CREATED.value());
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return jsonObject.toString();

	}

	@Override
	public String updateGtsCountry(GTSCountry gtsCountry) {

		JSONObject jsonObject = new JSONObject();
		try {
			gtsCountryRepository.save(gtsCountry);
			jsonObject.put("success", Boolean.TRUE);
			jsonObject.put("message", "Gts Country(s) updated successfully");
			jsonObject.put("status_code", HttpStatus.OK.value());
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return jsonObject.toString();
	}

	@Override
	public String deleteGtsCountry(int id) {

		JSONObject jsonObject = new JSONObject();
		try {
			gtsCountryRepository.deleteById(id);
			jsonObject.put("success", Boolean.TRUE);
			jsonObject.put("message", "Gts Country deleted successfully");
			jsonObject.put("status_code", HttpStatus.OK.value());
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return jsonObject.toString();
	}

	@Override
	public String deleteAllGtsCountries() {
		
		JSONObject jsonObject = new JSONObject();
		try {
			gtsCountryRepository.deleteAll();
			jsonObject.put("success", Boolean.TRUE);
			jsonObject.put("message", "Gts Countries deleted successfully");
			jsonObject.put("status_code", HttpStatus.OK.value());
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return jsonObject.toString();
	}


}