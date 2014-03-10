package com.corelogic.pmspring.core.domain.service;

import java.util.HashMap;
import java.util.Map;

public class RequestData {

	private Map<String, String> data;
	
	public RequestData() {
		data = new HashMap<String, String>();
	}
	
	public void setAttributeValue(String attribute, String value) {
		data.put(attribute, value);
	}
	
	public String getAttributeValue(String attribute) {
		return data.get(attribute);
	}
}
