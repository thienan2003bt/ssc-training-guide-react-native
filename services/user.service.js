class UserService {
    static async getAllUsers() {
        try {
            const response = await fetch("https://65ee9def08706c584d9bc036.mockapi.io/users");
            const data = await response.json();
            return data;
            
        } catch (error) {
            console.error("Error getting all user's data: ", error.message);
        }
    }
}

export default UserService;