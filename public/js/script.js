const parent = document.querySelector('#parent')
console.log('hello git')
document.querySelector('#btn').addEventListener('click',function(e){

    const location = document.querySelector('#inp').value;
    fetch(`/weather?location=${location}`)
    .then((response)=>{
        response.json().then((data)=>{
            fillTheBlanks(data); 
        })
    })

    e.preventDefault();
})

function fillTheBlanks(obj){
    parent.innerHTML=`
    <thead>
            <tr>
                <th style="width: 200px;">Hava Durumu</th>
                <td style="width: 100px;">${obj.durum}</td>
            </tr>

            <tr>
                <th>Sıcaklık</th>
                <td>${obj.temperature}</td>
            </tr>

            <tr>
                <th>Hissedilen</th>
                <td>${obj.hissedilen}</td>
            </tr>

            
        </thead>
    
    
    
    `;
}