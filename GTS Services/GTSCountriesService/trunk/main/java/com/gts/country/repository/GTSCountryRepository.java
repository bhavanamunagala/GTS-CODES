package com.gts.country.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gts.country.model.GTSCountry;

@Repository
public interface GTSCountryRepository extends JpaRepository<GTSCountry, Integer>,GTSCountryDAO<GTSCountry, String> {


}
