export const fetchEmployees = async () => {
    try {
        const response = await fetch('/api/employees/');
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
