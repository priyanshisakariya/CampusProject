package com.campus.campus_backend.service;


import com.campus.campus_backend.entity.SubmitProposal;
import com.campus.campus_backend.repository.SubmitProposalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubmitProposalService {
    @Autowired
    private SubmitProposalRepository submitProposalRepository;

    //save proporsal
    public SubmitProposal submitProposal(SubmitProposal proposal){

        return submitProposalRepository.save(proposal);

    }

}
