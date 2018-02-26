 export default function averageRisk(data) {
        let notification;
        let sumRisk = data.reduce(
            (prev,current) => {
            return prev + current.pollutionLevel
        }, 0);
        
    return sumRisk/data.length;
}

