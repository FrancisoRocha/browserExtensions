

export async function data() {
    try {
        const response = await fetch('./data/data.json');
        const data = await response.json();
        return data
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    
}
