package com.gts.country.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gts.country.exception.ApplicationException;
import com.gts.country.exception.GTSCountryNotFoundException;
import com.gts.country.model.GTSCountry;
import com.gts.country.service.GtsCountryService;

@RestController
@RequestMapping(value="api/v1/country")
public class GTSCountryController {
	
	@Autowired
	private GtsCountryService gtsCountryService;
	
	@GetMapping
	public ResponseEntity<List<GTSCountry>> getAll() {
		return new ResponseEntity<>(gtsCountryService.getAllGTSCountries(),HttpStatus.OK);
	}
	
	@GetMapping("/country_id")
	public ResponseEntity<GTSCountry> searchById(@RequestParam int countryId) {
		Optional<GTSCountry> gtsCountryId= gtsCountryService.findByCountryId(countryId);
		if(!gtsCountryId.isPresent()) {
			throw new GTSCountryNotFoundException("Gts Country Id not found ");
			}
		return new ResponseEntity<>(gtsCountryId.get(), HttpStatus.OK);

	}
	
	@GetMapping("/country_name")
	public ResponseEntity<List<GTSCountry>> searchByName(@RequestParam String countryName) {
		
		List<GTSCountry> gtsCountry= gtsCountryService.findByCountryName(countryName);
		if(gtsCountry.isEmpty()) {
			throw new GTSCountryNotFoundException("Gts Country Name not found ");
			}
		
		return new ResponseEntity<>(gtsCountryService.findByCountryName(countryName), HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<String> addGtsCountries(@RequestBody GTSCountry[] gtsCountries) {
		
		String gtsCountriesObj=null;
		
		

		
		for(GTSCountry gtsCountry: gtsCountries ) {
			
			if(gtsCountry.getGtsCountryId() != null) {
				throw new ApplicationException("Gts Country id found, ID is not required to add the data ");
			}
			
			if(gtsCountry.getGtsCountryName() == "" || gtsCountry.getGtsCountryName() == null ) {
				throw new ApplicationException("Gts Country Name should not be empty ");
			}
			
			
			List<GTSCountry> list = gtsCountryService.findByCountryName(gtsCountry.getGtsCountryName());
			if(list.size()>0) {
				throw new ApplicationException("Gts Country already exists");
			}
			
			int id=generateCountryId(); 
			gtsCountry.setGtsCountryId(id);
			gtsCountriesObj=gtsCountryService.addGtsCountry(gtsCountry);
		}
		
		return new ResponseEntity<>(gtsCountriesObj, HttpStatus.CREATED);
	}
	
	@PutMapping
	public ResponseEntity<String> editGtsCountries(@RequestBody GTSCountry[] gtsCountries){
		
		String gtsCountriesObj=null;
		
		for(GTSCountry gtsCountry: gtsCountries ) {
			if(gtsCountry.getGtsCountryId() == null) {
				throw new ApplicationException("Gts Country id not found, ID is required for update the data ");
			
			} 
			
			Optional<GTSCountry> gtsCountryId= gtsCountryService.findByCountryId(gtsCountry.getGtsCountryId());
			
			if(!gtsCountryId.isPresent()) {
				throw new GTSCountryNotFoundException("Country Id not found you can't update data ");
			}
			
			
			if(gtsCountry.getGtsCountryName() == "" || gtsCountry.getGtsCountryName() == null ) {
				throw new ApplicationException("Gts Country Name should not be empty ");
			
			}
			gtsCountriesObj=gtsCountryService.updateGtsCountry(gtsCountry);
		}
			return new ResponseEntity<>(gtsCountriesObj,HttpStatus.OK);
			
		
	}
	
	@DeleteMapping(value="/country_id")
	public ResponseEntity<String> deleteGTSCountries(@RequestBody GTSCountry gtsCountry){
		
		Optional<GTSCountry> gtsCountryId= gtsCountryService.findByCountryId(gtsCountry.getGtsCountryId());
		
		if(!gtsCountryId.isPresent()) {	
			throw new GTSCountryNotFoundException("Gts Country id not found ");
		}
	
		return new ResponseEntity<>(gtsCountryService.deleteGtsCountry(gtsCountry.getGtsCountryId()),HttpStatus.GONE);

	}
	
	@DeleteMapping
	public ResponseEntity<String> deleteAllRecords(){
		
		return new ResponseEntity<>(gtsCountryService.deleteAllGtsCountries(),HttpStatus.OK);
		
	}

public synchronized int generateCountryId() {
	return gtsCountryService.getAllGTSCountries().size()+1;
}
}