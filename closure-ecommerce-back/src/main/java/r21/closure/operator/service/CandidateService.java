package r21.closure.operator.service;

import r21.closure.operator.model.dto.RecruitmentDto;
import r21.closure.operator.model.dto.UserDto;

public interface CandidateService {
    void addRecruitmentToCandidateApplyList(UserDto userDto, RecruitmentDto recruitmentDto);
}
