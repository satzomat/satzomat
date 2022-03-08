# Satzomat

Satzomat: Ein Kompositum aus Satz und Automat. Twittert erste Sätze aus der deutschsprachigen Literatur, ganz von allein.

## Warum erste Sätze?

Erste Sätze sind ein Untersuchungsgegenstand der Literaturwissenschaft. Das sind erste Sätze und resp. letzte Sätze in Erzählungen, Romanen, Novellen. Was verrät uns der erste Satz über die sich anschließende Handlung? Wie schließt der letzte Satz eine Geschichte ab? Birgt der erste oder der letzte Satz möglicherweise die Quintessenz der Erzählung? Erste Sätze sind oft die bekanntesten Sätze aus der Literatur: Wer kennt nicht den ersten Satz des Werthers oder Einschlägiges von Kafka? Ist der erste Satz daher das Programm, das Leitmotiv, das durch den Text führt? Oder kann man den Roman im Kopfkino selbst weiterschreiben?

Seit der Beschäftigung mit Literaturgeschichte gibt es diese Fragestellungen zu ersten (und übrigens auch zu letzten) Sätzen immer wieder. 2020 erschien dazu das Buch von Peter Andre-Alt: *„Jemand musste Josef K. verleumdet haben …“ – Erste Sätze der Weltliteratur und was sie uns verraten*. Sämtliche Untersuchungen zu ersten bzw. letzten Sätzen sind bisher exemplarische, d.h. einzelne Romane, Erzählungen, Novellen werden auf ihre ersten Sätze hin untersucht. Peter Andre-Alt versucht z.B. eine Kategorisierung erster Sätze nach einem selbstdefinierten Typensystem. Er definiert zum Beispiel den Ersten-Satz-Typus „Plötzliches Ereignis“ oder den Typ „Kitsch und Trivales“. Wie ergiebig kann indessen eine Untersuchung mit Distant-Reading-Verfahren sein?

## Textkorpus

Um diesen Fragen nachzugehen, stellen wir Textkorpora von ersten und letzten Sätzen zusammen, indem wir sie automatisch aus größeren Textkorpora extrahieren. Begonnen haben wir  mit Novellen und Romanen aus dem Deutschen Textarchiv. Dort stehen die Texte im sogenannten DTA-Basisformat zur Verfügung, eine Untermenge des verbreiteten XML-basierten Kodierungs-Standards TEI. Dank dieser Struktur lassen sich Buchteile, Kapitel und Absätze voneinander abgrenzen.

Die automatische Extraktion kann durchaus problematisch sein: Literatur ist vielfältig, und das bildet sich auch im Markup ab. Wie lässt sich der erste Satz zweifelsfrei abgrenzen von beispielsweise einem vorangestellten Motto oder von einem einleitenden Vorwort der Herausgeber? Dazu wurden die Sätze einzeln übergeprüft und gegebenenfalls korrigiert.

## Twitter und AutoChirp

Beim Twittern der Texte unter @satzomat hilft uns der Service [*AutoChirp*](https://autochirp.spinfo.uni-koeln.de/home), der zu geplanten Uhrzeiten zweimal täglich einen ersten Satz postet.

## Weiterführende Ressourcen

* [Satzomat-Datenkorpora auf GitHub](https://github.com/satzomat/corpus)
* Datenkorpora mit den Voyant Tools betrachten:
  * [Erste Sätze aller Novellen aus dem DTA](https://voyant-tools.org/?view=corpusset&stopList=stop.de.german.txt&input=https://github.com/satzomat/corpus/raw/main/01_novellen_txt.zip)
  * [Erste Sätze aller Romane aus dem DTA](https://voyant-tools.org/?view=corpusset&stopList=stop.de.german.txt&input=https://github.com/satzomat/corpus/raw/main/02_romane_txt.zip)
* Satzomat-Poster auf der DHd 2022
  * [Paper](https://zenodo.org/record/6328153)
  * [Poster (PDF)](https://zenodo.org/record/6322559)
  * [Poster (HTML, interaktiv)](http://satzomat.de/dhd2022/poster.html)
