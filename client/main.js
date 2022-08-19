const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)



const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)


const secretBtn = document.getElementById("secretButton")

const getSecret = () => {
    axios.get("http://localhost:4000/api/secret/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

secretBtn.addEventListener('click', getSecret)


const careerBtn = document.getElementById("careerButton")

const getCareer = () => {
    axios.get("http://localhost:4000/api/career/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

careerBtn.addEventListener('click', getCareer)

