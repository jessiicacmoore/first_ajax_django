document.addEventListener("DOMContentLoaded", function() {
  const btnRootReq = document.querySelector('.btn-root-req');
  const btnPingReq = document.querySelector('.btn-ping-req');
  const btnCountReq = document.querySelector('.btn-count-req');
  const btnTimeReq = document.querySelector('.btn-time-req');
  const btnCarReq = document.querySelector('.btn-car-req');
  const carListElem = document.createElement('ul');
  carListElem.id = 'car-list';
  btnCarReq.parentElement.appendChild(carListElem);

  btnRootReq.addEventListener('click', () => {
    axios.get('http://intro-ajax-api.herokuapp.com/')
    .then(resp => {
      console.log(resp)
    })
  });

  btnPingReq.addEventListener('click', () => {
    axios.get('http://intro-ajax-api.herokuapp.com/ping')
    .then(resp => {
      console.log(resp.data);
      dataP = document.createElement('p');
      dataP.innerText = resp.data;
      btnPingReq.parentElement.appendChild(dataP);
    })
    .catch(error => {
      console.log(error.data)
      dataP = document.createElement('p');
      dataP.innerText = `Uh, oh. We messed up`;
      btnPingReq.parentElement.appendChild(dataP);
    })
    .then(resp => {
      console.log('Heyooo, the request is over!');
    })
  });

  btnCountReq.addEventListener('click', () => {
    axios.get('http://intro-ajax-api.herokuapp.com/count')
    .then(resp => {
      console.log(resp.data);
      dataP = document.createElement('p');
      dataP.innerText = resp.data;
      btnCountReq.parentElement.appendChild(dataP);
    })
  })

  btnTimeReq.addEventListener('click', () => {
    axios.get('http://intro-ajax-api.herokuapp.com/time', {
      params: {timezone: 'Pacific/Honolulu'},
    })
    .then(resp => {
      console.log(resp.data);
      dataP = document.createElement('p');
      dataP.innerText = resp.data;
      btnTimeReq.parentElement.appendChild(dataP);
    })
  })

  btnCarReq.addEventListener('click', () => {
    axios.get('http://intro-ajax-api.herokuapp.com/a_car')
    .then (resp => {
      console.log(resp.data);
      carListElem.innerHTML = resp.data;
    })
  })
  
});