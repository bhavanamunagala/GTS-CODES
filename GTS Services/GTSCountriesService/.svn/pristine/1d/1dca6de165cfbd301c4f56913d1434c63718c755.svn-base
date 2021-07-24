package com.gts.country.repository;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.gts.country.model.GTSCountry;

@Repository
@Transactional
public class GTSCountryDAOImpl implements GTSCountryDAO<GTSCountry, String> {

	@Autowired
	 EntityManager entityManager;
	    
	@Override
	public List<GTSCountry> findByName(String countryName) {
		
		Session currentSession=entityManager.unwrap(Session.class);
		Query<GTSCountry> query=currentSession.createQuery("FROM GTSCountry where gts_country_name = :countryName",GTSCountry.class);
		
		query.setParameter("countryName", countryName);
		
		return query.getResultList();
		
	}
	
	
	

}

