const parent = document.querySelector('#parent')
const contTable = document.querySelector('#containerTable');
document.querySelector('#btn').addEventListener('click',function(e){

    const location = document.querySelector('#location').value;
    fetch(`/weather?location=${location}`)
    .then((response)=>{
        response.json().then((data)=>{
            fillTheBlanks(data); 
        })
    })

    e.preventDefault();
})

function fillTheBlanks(obj){

    if(obj.error){
        contTable.innerHTML=`<h1 class="konum">${obj.error}</h1>`;
    }else{
        contTable.innerHTML=`
        <h1 class="konum">${obj.yer},${obj.ulke}</h1>
            <table>

                <thead>
                    <tr>
                        <th>Beklenen Hadise</th>
                        <th>Sıcaklık</th>
                        <th>Hissedilen Sıcaklık</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td>${obj.durum}</td>
                <td>${obj.temperature}</td>
                <td>${obj.hissedilen}</td>
                </tr>
                </tbody>

            </table>
        
        
        
        `;
    }
    
}