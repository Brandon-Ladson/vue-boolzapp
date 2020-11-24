// cliccando sulla chat vedo quella corrispondente;
// con header con dati relativi a chat attiva;
// relativa chat in elenco rimane selezionata

var app = new Vue ({

  el: '#app',
  data: {

    indiceProfilo: 0,
    messaggioScritto: '',
    contatti: [

      {
        nome: 'Michele',
        fotoAmico: 'img/avatar_1.jpg',
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
            dataOra: '20/11/2020 12:05:32',
            tipo: 'ricevuto'
          }
        ]
      },
      {
        nome: 'Fabio',
        fotoAmico: 'img/avatar_2.jpg',
        messaggi: [
          {
            messaggio: 'Ciao',
            dataOra: '10/01/2020 14:20:55',
            tipo: 'inviato'
          },
          {
            messaggio: 'Come stai?',
            dataOra: '10/01/2020 15:01:00',
            tipo: 'inviato'
          },
          {
            messaggio: 'Si tira avanti',
            dataOra: '20/11/2020 15:03:02',
            tipo: 'ricevuto'
          },
          {
            messaggio: 'Tu come stai?',
            dataOra: '20/11/2020 16:01:31',
            tipo: 'ricevuto'
          },
          {
            messaggio: 'Tutto bene',
            dataOra: '20/11/2020 16:55:32',
            tipo: 'inviato'
          }
        ]
      },
      {
        nome: 'Samuele',
        fotoAmico: 'img/avatar_3.jpg',
        messaggi: [
          {
            messaggio: 'Hai fatto i compiti?',
            dataOra: '10/01/2020 10:30:55',
            tipo: 'inviato'
          },
          {
            messaggio: 'Non ancora',
            dataOra: '10/01/2020 10:40:00',
            tipo: 'ricevuto'
          },
          {
            messaggio: 'Non aspettare troppo a cominciare',
            dataOra: '20/11/2020 10:52:02',
            tipo: 'inviato'
          },
          {
            messaggio: 'Perchè?',
            dataOra: '20/11/2020 11:01:31',
            tipo: 'ricevuto'
          },
          {
            messaggio: 'Perchè questa sera usciamo',
            dataOra: '20/11/2020 12:11:32',
            tipo: 'inviato'
          }
        ]
      },
      {
        nome: 'Luisa',
        fotoAmico: 'img/avatar_4.jpg',
        messaggi: [
          {
            messaggio: 'Auguri!!!',
            dataOra: '10/01/2020 09:33:55',
            tipo: 'inviato'
          },
          {
            messaggio: 'Grazie!!!',
            dataOra: '10/01/2020 09:34:00',
            tipo: 'ricevuto'
          },
          {
            messaggio: 'Cosa fai per festeggiare?',
            dataOra: '20/11/2020 10:06:02',
            tipo: 'inviato'
          },
          {
            messaggio: 'Vado al ristorante?',
            dataOra: '20/11/2020 10:08:31',
            tipo: 'ricevuto'
          },
          {
            messaggio: 'Vuoi venire anche tu?',
            dataOra: '20/11/2020 10:44:32',
            tipo: 'ricevuto'
          }
        ]
      }

    ]


  },
  methods: {

    selezioneProfilo: function(index) {
      this.indiceProfilo = index;
    },

    inviaMessaggio: function (messaggioScritto) {

      var time = new Date();
      var anno = time.getFullYear();
      var mese = time.getMonth();
      var giorno = time.getDate();
      var ora = time.getHours();
      var minuti = time.getMinutes();
      var secondi = time.getSeconds();

      this.contatti[this.indiceProfilo].messaggi.push(
        {
          messaggio: this.messaggioScritto,
          dataOra: giorno + "/" + mese + "/" + anno + " " + ora + ":" + minuti + ":" + secondi,
          tipo: 'inviato'
        }
      );

      this.messaggioScritto = '';

      setTimeout (() => {

        time = new Date();
        anno = time.getFullYear();
        mese = time.getMonth();
        giorno = time.getDate();
        ora = time.getHours();
        minuti = time.getMinutes();
        secondi = time.getSeconds();

        this.contatti[this.indiceProfilo].messaggi.push(
          {
            messaggio: 'ok',
            dataOra: giorno + "/" + mese + "/" + anno + " " + ora + ":" + minuti + ":" + secondi,
            tipo: 'ricevuto'
          }
        );
      }, 1000);
    }

  }

})
