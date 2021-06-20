package r21.closure.operator.dbconfig.mongo;

import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.mongodb.core.MongoTemplate;

import java.util.Objects;

@Configuration
@PropertySource({"classpath:/application.properties"})
public class MongoConfig {

    @Autowired
    private Environment env;

    @Bean
    public MongoClient mongo() {
        ConnectionString connectionString = new ConnectionString(Objects.requireNonNull(env.getProperty("spring.data.mongodb.uri")));
        MongoClientSettings mongoClientSettings = MongoClientSettings.builder()
                .applyConnectionString(connectionString)
                .build();

        return MongoClients.create(mongoClientSettings);
    }

    @Bean
    public MongoTemplate mongoTemplate() throws Exception {
        return new MongoTemplate(mongo(), "closure-ecommerce-product-db");
    }

}
