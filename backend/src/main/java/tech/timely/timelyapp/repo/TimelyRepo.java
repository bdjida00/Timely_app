package tech.timely.timelyapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.timely.timelyapp.model.Timely;

public interface TimelyRepo extends JpaRepository<Timely, Long> {
    void deleteTimelyById(Long id);
}
