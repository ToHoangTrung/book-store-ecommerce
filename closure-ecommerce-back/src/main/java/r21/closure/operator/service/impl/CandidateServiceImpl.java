package r21.closure.operator.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import r21.closure.operator.model.dto.RecruitmentDto;
import r21.closure.operator.model.dto.UserDto;
import r21.closure.operator.repository.CandidateRepository;
import r21.closure.operator.service.CandidateService;

@Service
public class CandidateServiceImpl implements CandidateService {

    @Autowired
    private CandidateRepository candidateRepository;

    @Override
    public void addRecruitmentToCandidateApplyList(UserDto userDto, RecruitmentDto recruitmentDto) {

    }
}
