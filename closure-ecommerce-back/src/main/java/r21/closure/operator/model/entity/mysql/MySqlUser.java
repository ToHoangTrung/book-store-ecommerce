package r21.closure.operator.model.entity.mysql;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Entity
@Table(name = "customer")
@Getter
@Setter
public class MySqlUser extends AbstractMySqlEntity{

    private String name;

    private String phone;

    private String email;

    private String cmnd;

    private LocalDate birthday;

    private String username;

    @JsonIgnore
    private String password;

    @OneToMany(mappedBy = "user")
    private Set<MysqlAddress> addresses = new HashSet<>();

    @Enumerated(EnumType.STRING)
    private Role role;

    public MySqlUser() {

    }

    public enum Role {
        ROLE_USER("User"),
        ROLE_ADMIN("Admin");

        public final String label;

        Role(String label) {
            this.label = label;
        }

        public static List<String> getUserRoles() {
            return Stream.of(Role.values()).map(Role::name).collect(Collectors.toList());
        }
    }

    public MySqlUser(String username, String email, String password, String role) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.role = MySqlUser.Role.valueOf(role);
    }
}
