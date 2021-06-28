package r21.closure.operator.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import r21.closure.operator.model.entity.mysql.MySqlUser;
import r21.closure.operator.model.exception.main.ClosureEntityNotFoundException;
import r21.closure.operator.repository.mysql.MySqlUserRepository;

import javax.transaction.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    MySqlUserRepository mySqlUserRepository;

    @Override
    @Transactional
    public UserDetailsImpl loadUserByUsername(String username) throws ClosureEntityNotFoundException {
        MySqlUser user = mySqlUserRepository.findByUsername(username);
        if (user == null) {
            throw new ClosureEntityNotFoundException(String.format("This username: '%s' does not exist", username));
        }
        return UserDetailsImpl.build(user);
    }

}
