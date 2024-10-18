package fsikali.shopsystem.service;

import fsikali.shopsystem.model.Client;

import java.util.List;

public interface ClientService {
    public Client saveClient(Client client);
    public List<Client> getAllClients();
}
