// cliccando sulla chat vedo quella corrispondente;
// con header con dati relativi a chat attiva;
// relativa chat in elenco rimane selezionata

var app = new Vue ({

  el: '#app',
  data: {

    indiceProfilo: 0,
    messaggioScritto: '',
    ricercaContatto: '',
    contatti: [

      {
        nome: 'Michele',
        fotoAmico: 'img/avatar_1.jpg',
        visibile: true,
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
        visibile: true,
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
        visibile: true,
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
        visibile: true,
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

    // funzione per selezionare la chat su cui scrivere
    selezioneProfilo: function(index) {
      this.indiceProfilo = index;
    },
    
    // funzione per inviare il messaggio dell'utente e per generare risposta automatica
    inviaMessaggio: function () {

      // controllo per pushare solo se l'utente ha scritto qualcosa nell'input
      if (this.messaggioScritto != '') {
        // faccio il push di un nuovo oggetto nell'array contatti selezionato
        this.contatti[this.indiceProfilo].messaggi.push(
          {
            messaggio: this.messaggioScritto,
            dataOra: this.generatoreDataOra(),
            tipo: 'inviato'
          }
        );
      }

      // dichiaro una variabile risposta con una stringa vuota che cambierà in base a cosa ha scritto l'utente
      var risp = '';

      if (this.messaggioScritto.toLowerCase() === 'ciao') {
        risp = 'Ciao anche a te';
      } else if (this.messaggioScritto.toLowerCase() === 'come stai?') {
        risp = 'Bene. Tu come stai?';
      } else {
        risp = 'ok';
      }

      // controllo per pushare solo se l'utente ha scritto qualcosa nell'input
      if (this.messaggioScritto != '') {
        // setto quanto tempo dopo l'invio del messaggio utente parte quello automatico
        setTimeout (() => {
          // faccio il push di un nuovo oggetto nell'array contatti selezionato
          this.contatti[this.indiceProfilo].messaggi.push(
            {
              messaggio: risp,
              dataOra: this.generatoreDataOra(),
              tipo: 'ricevuto'
            }
          );
        }, 1000);
      }

      // riporto il valore di messaggioScritto a stringa vuota
      this.messaggioScritto = '';

    },

    // funzione per filtrare la chat desiderata
    ricercaChat: function () {

      this.contatti.forEach((item) => {

        if (item.nome.toLowerCase().includes(this.ricercaContatto.toLowerCase())) {
          item.visibile = true;

        } else {
          item.visibile = false;
        }

      });

    },

    // funzione per generare data e ora reali delle chat
    generatoreDataOra: function () {

      // creo delle variabili per ricavare la data e l'ora al momento dell'invio del messaggio
      var time = new Date();

      // anno
      var anno = time.getFullYear();

      // mesi
      var mese = time.getMonth() + 1;
      if (mese < 10) {
        mese = '0' + mese;
      }

      // giorni
      var giorno = time.getDate();
      if (giorno < 10) {
        giorno = '0' + giorno;
      }

      // ore
      var ora = time.getHours();
      if (ora < 10) {
        ora = '0' + ora;
      }

      // minuti
      var minuti = time.getMinutes();
      if (minuti < 10) {
        minuti = '0' + minuti;
      }

      // secondi
      var secondi = time.getSeconds();
      if (secondi < 10) {
        secondi = '0' + secondi;
      }

      // ritorno il risultato
      return giorno + "/" + mese + "/" + anno + " " + ora + ":" + minuti + ":" + secondi;

    }

  }

})
