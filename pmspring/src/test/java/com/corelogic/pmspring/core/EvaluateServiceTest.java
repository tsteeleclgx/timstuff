package com.corelogic.pmspring.core;

import static org.junit.Assert.*;

import org.junit.Test;

import com.corelogic.pmspring.core.domain.attribute.Attribute;
import com.corelogic.pmspring.core.domain.condition.Condition;
import com.corelogic.pmspring.core.domain.service.EvaluateEventHandler;
import com.corelogic.pmspring.core.domain.service.EvaluateService;
import com.corelogic.pmspring.core.domain.service.RequestData;

public class EvaluateServiceTest {
	
	private EvaluateService uut = new EvaluateEventHandler();

	@Test
	public void testEvaluateStringCompareFalse() {
		// create attribute
		Attribute att = new Attribute("State");
		// create condition
		Condition cond = new Condition(att,"MA");
		// how to store model?
		RequestData requestData = new RequestData();
		requestData.setAttributeValue("State", "CA");
		
		EvaluateRequestEvent evaluateRequestEvent = new EvaluateRequestEvent(requestData);
		fail("Not yet implemented");
	}

}
