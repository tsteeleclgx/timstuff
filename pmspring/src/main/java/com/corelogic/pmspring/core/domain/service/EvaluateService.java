package com.corelogic.pmspring.core.domain.service;

import com.corelogic.pmspring.core.domain.event.EvaluateRequestEvent;
import com.corelogic.pmspring.core.domain.event.RequestEvaluatedEvent;

public interface EvaluateService {

	RequestEvaluatedEvent evaluate(EvaluateRequestEvent evaluateRequestEvent);
}
