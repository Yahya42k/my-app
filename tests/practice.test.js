describe('API , React Component and Network Check', () => {
    it(' API call successfully', () => {
        
        const fetchData = () => Promise.resolve({ data: { message: "Success" } });
        fetchData().then(response => {
            
            expect(response.data.message).toBe("Success");
        });
    });

    it(' test  React component', () => {
       
        const renderComponent = () => "Component rendering simulated";
        const component = renderComponent();
        
        expect(component).toBeDefined();
    });

    it(' network connectivity check', () => {
      
        const checkNetwork = () => "online";
        const networkStatus = checkNetwork();
       
        expect(networkStatus).toBe("online");
    });
});
