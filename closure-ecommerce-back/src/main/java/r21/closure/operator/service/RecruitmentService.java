package r21.closure.operator.service;

import r21.closure.operator.model.dto.RecruitmentDto;

import java.util.List;

public interface RecruitmentService {
    List<RecruitmentDto> searchRecruitments(String keyword);
}
