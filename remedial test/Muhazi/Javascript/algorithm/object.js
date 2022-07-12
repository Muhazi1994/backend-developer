let profile = {
    name: 'Muhazi',
    addres: 'Seketeng SUumbawa NTB',
    age: 27,
    isJob: true,
};
console.log(profile);
console.log(profile.name);

if (profile.isJob){
    console.log(`${profile.name} (${profile.age}) has been job`);
} else {
    console.log(`${profile.name} (${profile.age}) has not been job`);
}
