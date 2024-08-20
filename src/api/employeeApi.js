export const fetchEmployees = async () => {
    try {
        const response = await fetch('http://192.168.1.122:8000/api/employees/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("There was an error fetching the employees!", error);
        return [];
    }
};
