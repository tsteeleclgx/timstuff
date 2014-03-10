package com.corelogic.pmspring.core.domain.condition;

import com.corelogic.pmspring.core.domain.attribute.Attribute;

public class Condition {
	private Attribute attribute;
	// start with equals
	// private Operator operator;
	private String value;
	
	Condition(Attribute attribute, String value) {
		this.attribute = attribute;
		this.value = value;
	}
}