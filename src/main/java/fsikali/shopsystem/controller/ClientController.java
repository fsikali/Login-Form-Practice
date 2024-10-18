package fsikali.shopsystem.controller;

import fsikali.shopsystem.model.Client;
import fsikali.shopsystem.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/client")
@CrossOrigin
public class ClientController {
    @Autowired
    private ClientService clientService;

    @PostMapping("/add")
    public String add(@RequestBody Client client){
        clientService.saveClient(client);
        return "New client is added";
    }

    @GetMapping("/getAll")
    public List<Client> getAllClients() {
        return clientService.getAllClients();
    }
}


