// cliccando sulla chat vedo quella corrispondente;
// con header con dati relativi a chat attiva;
// relativa chat in elenco rimane selezionata

var app = new Vue ({

  el: '#app',
  data: {

    indiceProfilo: 0,
    contatti: [

      {
        nome: 'Michele',
        messaggi: [
          {
            messaggio: 'Lo sai che ha aperto una nuova pizzeria?',
            dataOra: '10/01/2020 15:30:55',
            tipo: 'inviato'
          },
          {
            messaggio: 'Si, ma preferirei andare al cinema',
            dataOra: '10/01/2020 15:50:00',
            tipo: 'ricevuto'
          },
          {
            messaggio: 'Va bene',
            dataOra: '20/11/2020 10:52:02',
            tipo: 'inviato'
          },
          {
            messaggio: 'A che ora andiamo?',
            dataOra: '20/11/2020 12:01:31',
            tipo: 'inviato'
          },
          {
            messaggio: 'Verso le 20:30',
            dataOra: '20/11/2020 12:01:32',
            tipo: 'ricevuto'
          }
        ]
      },
      {
        nome: 'Fabio',
        messaggi: [
          {
            messaggio: 'Ciao',
            dataOra: '10/01/2020 15:30:55',
            tipo: 'inviato'
          },
          {
            messaggio: 'Come stai?',
            dataOra: '10/01/2020 15:50:00',
            tipo: 'inviato'
          },
          {
            messaggio: 'Si tira avanti',
            dataOra: '20/11/2020 10:52:02',
            tipo: 'ricevuto'
          },
          {
            messaggio: 'Tu come stai?',
            dataOra: '20/11/2020 12:01:31',
            tipo: 'ricevuto'
          },
          {
            messaggio: 'Tutto bene',
            dataOra: '20/11/2020 12:01:32',
            tipo: 'inviato'
          }
        ]
      },
      {
        nome: 'Samuele',
        messaggi: [
          {
            messaggio: 'Hai fatto i compiti?',
            dataOra: '10/01/2020 15:30:55',
            tipo: 'inviato'
          },
          {
            messaggio: 'Non ancora',
            dataOra: '10/01/2020 15:50:00',
            tipo: 'ricevuto'
          },
          {
            messaggio: 'Non aspettare troppo a cominciare',
            dataOra: '20/11/2020 10:52:02',
            tipo: 'inviato'
          },
          {
            messaggio: 'Perchè?',
            dataOra: '20/11/2020 12:01:31',
            tipo: 'ricevuto'
          },
          {
            messaggio: 'Perchè questa sera usciamo',
            dataOra: '20/11/2020 12:01:32',
            tipo: 'inviato'
          }
        ]
      },
      {
        nome: 'Luisa',
        messaggi: [
          {
            messaggio: 'Auguri!!!',
            dataOra: '10/01/2020 15:30:55',
            tipo: 'inviato'
          },
          {
            messaggio: 'Grazie!!!',
            dataOra: '10/01/2020 15:50:00',
            tipo: 'ricevuto'
          },
          {
            messaggio: 'Cosa fai per festeggiare?',
            dataOra: '20/11/2020 10:52:02',
            tipo: 'inviato'
          },
          {
            messaggio: 'Vado al ristorante?',
            dataOra: '20/11/2020 12:01:31',
            tipo: 'ricevuto'
          },
          {
            messaggio: 'Vuoi venire anche tu?',
            dataOra: '20/11/2020 12:01:32',
            tipo: 'ricevuto'
          }
        ]
      }

    ]


  },
  methods: {
    selezioneProfilo: function(index) {
      this.indiceProfilo = index;
    }
  }

})
