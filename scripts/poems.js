(() => {
  "use strict";

  const POEMS = [
    {
      text: `
        in these rooms
        thin ladies &
        thin men within

        their voices choure
        a heart's desire
        her vains won't win
        not where he's been
        & the clock alone
        holds the hand home

        it's slow, take care
        you won't reconise
        once been there
        & the white owl
        bursting at the seems
        screams
      `,
    },
    {
      text: `
        reconise face in the roots
        dim as they grow thin
        uncanny connections rise
        the rest must rape the skies
      `,
    },
    {
      text: `
        in this world unseen
        men occupy
        animals cannot cry
        but fish 2 fry
        push u to try
        thinking, live & let
        woman unclean
        treetrunks decay
        all idols say
        agrippa tomorrow
        apple today

        or : i never belived anyway
      `,
    },
    {
      text: `
        the night-light's on
        but dim, been worked
        by little creatures
        by their little limbs
        
        & just there, on a whim
        some big shoes
        she slides right in

        but these aren't teachers
        they just gargle & spin
        like great trunks or something within
        that part of you
                        who thinks it impossible to win
        
        while you know rest
        the illusive sort
        your long game finished
        it's time to court 
      `,
    },
    {
      text: `
        feel iam being watched
        held with invisble unknown chains
        licentiously dangled
        for all my charms

        i wish i were free
        to take you in
        beautiful one
        take us in

        i could do with a watch
        the only one i own
        stripped of old clothes
        gone long alone

        i wish it were me
        to take us in
        beautiful one
        take me in
      `,
    },
    {
      text: `
        alight my flesh
        my foregn twin
        keep me long
        i'll take us in
        drape your white linin
        uncover all shades of blue
        within your shapes & bends
        those things that make u cool
      `,
    },
    {
      text: `
        the bus is late
        it carries a sky, lets out a sigh
        & plods, according to wavering design

        a steigh, you cry
        but i know best, i know time
        she's full of hate & rest
        but not as i lay, he's cupping my breast
        
        we're singing tunes while the loon is falling down his tomb
        i'm climbing high ideals on scalpoul & calpoul
        to reach my directors cut
        
        fuck; the man has changed but the outcomes the same
        lost rage of game
        while we all remain
        
        tangled in web
        on solatude decks
        bare necks
        
        just for kicks; look at his mop, this is my stop
      `,
    },
    {
      text: `
        afar afar, i tell myself
        i don't care where u are
        but i knew
        that i do
        after sending that part
        of me, to you

        & now do all our things
        with whatever little fling
        & it makes me want to bring
        us down.
      `,
    },
    {
      text: `
        the conversation narrows
        our eyes grow dim
        something in me simles
        then goes out again

        i wish to be outside now
        to properly feel the wind
        push my face
        into yours
        as i see him
      `,
    },
    {
      text: `
        starting to feel              
        open your heart              
        i rip it apart                
        becuase the world is real     
        sense it's vains              
        feel your pain                
        try again                     
        your broken brain
                                      
        wait anew                     
        girl again                    
        i love you                    
        my version                      

        an ai chesnut
        hearts that stop
        olt but true
        a blue smile
        a pierced nip
        a vengful slip
        just the tip

        bags of lones
        stutters of tones
        your swagger
        my dagger
        leave me alone
      `,
    },
    {
      text: `
        girl who lives, beond the waves
        to fly how long? who's to say
        i used to know her, down the way
        she's more than meat
        & good to eat
        & slave slaves away
      `,
    },
    {
      text: `
        an inspiration, to us slaves
        a master to us none
        for the master, who guides my way
        exists in everyone
      `,
    },
    {
      text: `
        i ask, my head answers :
        crush this spider? no
        stab my eye? no
        follow the fireworks? no
        drink the puddle? no
        hand in grate? no
        turn around? no
        dick in hole? no
        climb the side? no
        sit on wall? no
        keep going? no
        how 2 live?
      `,
    },
    {
      text: `
        & i love all i taste is you
        around my pours benif the skin
        strangled by limbs
        where do you begin
      `,
    },
    {
      text: `
        the spitgun fires
        the organist's knived
        my kitchens on fire
        let's move outside

        where the air smells of angles
        who like us, disolved away
        fighting that great bus
        we should've shot away
        now no time for that
        orange & gay
        i'll pop it's left wheels
        move; your hand's in the

        roof of my mouth, guiding me
        to the vast unknown, just down the way
      `,
    },
    {
      text: `
        to that greengirl w/ orange hues
        i leave to you, this bittersweet taste
        this darkened flesh, that moves
        creeps toward your tapastry
        with haste

        but i'll never arrive
        big bastard bumbling bass carries
        just further, til we die
      `,
    },
    {
      text: `
        i miss your smell
        described by many
        for it lingers &'s
        in my paws, like honey

        & would you tell
        the next of me
        see in your dress
        under the rocks benith ur feet
        
        i lying in my defeat
        with your smell
        in my self-made cell
        co-authored, by you
      `,
    },
    {
      text: `
        at last the moment's smothered
        the green eyed men, & some frantic others
        clean the attemps that have all been guttered
        with kindness

        but they see hate
        without care
        for they will not be late

        & the frozen mothers, now thoaring out
        
        have lost their touch, so begin to shout
        how they have been without, ages
        
        to count, wine to time
        to grab on the hands
        else we'd stand their idel

        & the brave few, promise they'll wait 4 theirs
        drink too, & end up bare in lares
        with those who stash & scheme
        not for a miricle, but for the want to be clean

        & once ready lost to be seen
        so keep good you've got
        don't stop the clock
        act as if tho forgot
      `,
    },
    {
      text: `
        when i'm cold & feeling snotty
        & the roof's caved in
        killing the queen of scotty
        leave just your shoesouls
        it's starting to send me scatty
        so you send me for a cleanse
        & i end up at some kittys

        & despite the weather
        we ended up feeling better
        & despite some decay
        o.k., this home is thinking 2 stay
      `,
    },
    {
      text: `
        i vomit on a page
        it smells horrible
        but looks good
        4 it's done at once
      `,
    },
    {
      text: `
        the guillotines tank ur vest
        & the arches clean, go form a chrest
        while i'm standing solely
        looking if anyone to love is left
        
        & beside a cluttered crown
        stands a man, they're putting down
        but i've just cheered like the other clowns

        so my lips remain open
        & a nose bellows stout
        from behind the arches, they cut him out
        
        & now he stands
        maracas for hands, by my window

        & i've tried to speak of dreams
        i even changed them, to end the means
        of any lousy git getting to me

        but that's just made us cry
        & i'm going for your lips
        just before i die
        for neither of us know when
        the time may come to go
        so ring any bum
        for that moment of fun

        i'll remember- within those shades of you;
        i call crass,
        you're cute,
        i stand below with my fluet

        but you just turn on the blinds
      `,
    },
    {
      text: `
        buys paint from the shop
        while the sheetpath lies with piano ontop
        & you just can't believe the playing's stopped
        piercing the skin all around you

        & the undertaker howled on by
        expecting u to get on your knees & cry
        but it never really took much to die
        after they hooked me

        now the time isn't rushing down
        to catch the jesus without his crown
        & the undertaker's son is starting 2 frown
        he knows he wants her

        but the masses have been selling sweets
        to any abody that they meet
        especially those with egyptian feet
        they float atop rubble

        the sun will surely rise today
        atop the world, your breats, forsay
        now, there's only a thing left to be
        gay
      `,
    },
    {
      text: `
        it almost feels a kiss, on the neck
        on the back of her beautiful walk
        you scared; after a day, of feeling
        like you will soon- like some harmless pork
        like another flower ripped from his stalk
        
        but it's the most priceless flower, you love her
        she slows you, while almost kissing
        & you ring out your swollen throats
        & she tells you hers, while going missing
        
        you're gone too, in another zoo
        under some other singer
        who just falls
        all cock, no balls
      `,
    },
    {
      text: `
        4lone
      `,
    },
    {
      text: `
        she takes to the letters
        like a bull 2 a flame
        & after wwaking up in sweets
        feels so very lame

        you see for a moment
        the blue curse with west wings
        then run to the home
        to catch up on things
        
        but the things are broken
        & they claw at your arms
        now you see, complacency
        they cut off his lucky charms

        that doesn't matter, glow up another
        she'll often think of you
        & his eyes are bright
        & we'll cancel the night
        i meant to strangle you
      `,
    },
    {
      text: `
        the cold days posed & are promised to last
        many lines touch the sea, but none are cast
        the news; didn't tell yous, & it's better sober to think
        but a few have thrown their animal out on the rink
        & are guiding your hips to dip
        while you hoist your honest ideals
        & begin to sink

        we'll fish the waste up, over, & out
        now, under the guides of dark, surrounded
        by lenses lenses lenses who green 4 light
        & hungry cats, with their tail upright
        & we'll never, ever do anything to change
        all that light that travels around your head

        how strange
      `,
    },
    {
      text: `
        she when nothing come 2 me
        tho ur green metal bride
        opens her caged blured chest
        & a bird flys from inside

        though u think the life's inside
        it flows right thru
        like that caged bride

        & my black light hate
        & shades of blue
        you pull me close
        right in to you
      `,
    },
    {
      text: `
        well i bought myself a poem
        & got myself a record, in order
        to describe some useless idea
        in exchange for the hour's mate

        but jesus christ the lass isn't fare
        & the house on the hill
        just tosses out suns, to keep
        an illision of progress & help
        while the men dance
        to woman's wounded screams
      `,
    },
    {
      text: `
        today's eedle man stares & asks
        where he'll go when the next picture comes around
        & tomorrow's screams, it's time to leave
        all these tasks tower the mind's mound
        but i've got a few tugs in reserve 
        that've been saved for an artifical pound
        & you don't look a bit like me
        so sheeve ur eyes
        & keep your pride
        i'll always be here
        just not always near
      `,
    },
    {
      text: `
        "let those treacherous bastards eat by themselves
                                                          they deserve each other"
      `,
    },
    {
      text: `
        an unfocused lense burns the ant
        twice a day, for that's all is left
        & when satisifed they march away
        beware the commity drum, i say
        for you cannot rock the earth in jest

        love convinced with just a guess
        the child conceived in a minuite, or less
        toss to the ground to be eaten by worms
        makes not a sound except those squerms
        it's all right, just look a way
        for you are alive, & have nolt 2 say
      `,
    },
    {
      text: `
        you see, i'm easy to read
        while a woman follows her idol
        as his face is crushed like a can
        the lead just tightens
        with each passing limp
        so i call the manager
        & ask him for a hit
        but he's off on a special trip
        just pulled out all their teeth
        "to be just like you sister"
        i told him to pack in with it

        my box has just gone
        she & him must've cut the rock
        so i'll be eating again
        all the way to the top
      `,
    },
    {
      text: `
        the sunken sun
        blinds the man
        wishing he had won
        imagening the past

        but i've lost track
        & cannot think about the view
        for i'm lost in the future
        alongside visions of you
      `,
    },
    {
      text: `
        as the ocean's scream pulls me in
        a room's tide destroys my pride
        i'm left with myself in hate
        in a foregn place, til 8
        then i'll crawl back in
        to another place, with tonic & gin
        awaiting to begin, anew

        but what i'm really waiting for
        is a copy, of that body i adore
        & to push my smaller limbs in
        til you beg for the bigger score
        i'll mold you, fuck you
        into something more
      `,
    },
    {
      text: `
        sitting; not picturing much
        but your face against mine
        then i wake up, to a bell
        & the brick, & some fkn prick
        who takes u out to drink
      `,
    },
    {
      text: `
        a jester with the crown of scorns
        wears his skin that's laced with thorns
        while the king just pours
        & his eyes are bred & shot
        after last night's trip to the parking lot
        but neither of them are able to
        spot me
      `,
    },
    {
      text: `
        the morning of the day of war
        a night before; spent jn a daze of rats
        surrounded by fields of brains.
        just brains looking to score
        the phone rings, & now the war's off
        but it hasn't wore off, now the brains start to dribble
        & the fields an ocean & your all so very little.
        safe & steigh on ur mound of dirt
        & you see Moses drowing & feel so very hurt
        but the lovers aren't leaving, they weren't ever there
        the brains can only lick, you can't bare to stare
        & the few too, who saw the idel fall
        the moon's dragging them to work,
        on the sequal to the car
        so we're left with your afternoon bones
        it's important they stole that star
        q phone rings again, there's no time for a scar
        a voice lay on the other end
        "don't forget who you are"
      `,
    },
    {
      text: `
        little to love
        less to be loved by
        hook line
        time to die
      `,
    },
    {
      text: `
        the green appears from cracks of true
        in some vain hope to get to you
        & just as i had grasped your thigh
        the beauty turns, & begins to die

        & i try
        i try to reason
        with the woman within
        to hear my body
        as it crys, crys
        but she sighs
        she has given her all
        & now, in the face of someone small
        she turns, for something more
      `,
    },
    {
      text: `
        & as i, the man age
        the shadows watch
        & you maidens lay
        the reason i stand
        is for that mindseye
        & all the men
        who are left behind

        they cannot cry
        like i do
        & up high,
        in violence & threat
        i miss them touch
        but in my face
        i feel them much
      `,
    },
    {
      text: `
        stomping soul sold like mackral
        your knees itch like cornflakes
        & my mind trys to follow the tempo
        but my body moves like another's aches
        we're all consumed by this old fable
        but please, try wake
        or at least jazzmendo
      `,
    },
    {
      text: `
        does the lonely one
        think only of herself
        when times are fun
        & the pages won
        & his side is shown
        to be nothing like he owns

        & the songbird lies
        by not moving their mouth
        can the words travel forth
        thru wind & by Gail
        raise the anchors
        cut the sails
        
        "there's a man there, with no water"
        my ocean's vast
        & i'm using our sand
        to turn mother into glass
        so i can recall her smile
        because we've been out
        steady a while

        & my flame hasn't stopped
        i'll be loving, in another direction
        4 3 new miles
      `,
    },
    {
      text: `
        the leaves fell down
        & scattered the crown
        the prince of the air
        she lost her gown
        i grabbed it for me
        while perched in my tree
        i wanted a-new
        enougth to get you
      `,
    },
    {
      text: `
        if she could spend one moment
        bare without hands
        could the tent be moved
        would the dream be crushed
        the mind's eye would sigh
        at the waste of the day
        & the lame brain would say
        nothing about you

        if he could spend, 1 token of time
        & be bare without hands
        could the tent's seem move
        would the dream be crushed
        a mind's eye sighs blue
        at the waste of the day
        & the lame brain goes to say
        nothing about you
      `,
    },
    {
      text: `
        i could call it out
        & forgo my pride
        carry the cross
        gift to my bride

        while the crowd comes
        & pretends
        my lips run deep
        & are alone again

        or quiver at screens
        into dante's terror
        the mark of the beast
        all shared together

        those alone
        cannot condone
        another forgone
        act of god
      `,
    },
    {
      text: `
        if i could unzip
        your seemless spine
        & run my flesh
        up your mind
        would it balance
        like a robin on the line
        or does it belong to another
        like that palastian man
                                & his wine
        i hope it's him
        it was mine for a time
      `,
    },
    {
      text: `
        if i could walk
        understand, i'd run 2 the end
        & if the awful, naked truth
        stops carrying it's hen
        i'll slip past them
        again & again
        til we all
        lost sight of you
      `,
    },
    {
      text: `
        it's dark & sad & i'm reliant on the dance
        whose hands run up, not down
        tipping off my paper crown & make me drown
                                                  drown now
        
        & while your screams i cannot hear
        sometimes hear you whisper in my ear
        not the nostalgic "have no fear"
        but something bitter, like im not from here
        
        didn't you know? didn't you see?
        i gave you my all, but it wasn't meant to be
        & the reason, the reason you may still taste
        not because the food was laced
        but because, because you never wanted methere
        it's just easier, sometimes, not to care
      `,
    },
    {
      text: `
        & if it were to rain now
        every day, i'd row us
        well out the way
        so we can kiss
        with his embrace
        & get all wet
        so i can see ur face
      `,
    },
    {
      text: `
        i look out my top window
        gourgous dark shades of blue
        i peer out the bottom
        no sign of you

        i think of you blindly
        as my hands start to slip
        my body goes limp
        i moan your name
        i stre tch out my arms
        come on again

        i take to the window
        long shades of black
        now i look to heaven
        no-one stares back

        i wish for a carpet
        that i may give 2 u
        i imagine just two
        just us two (2)
      `,
    },
    {
      text: `
        why must you touch me
        can't i just look
        write a changing mind
        in this here nook
        while it's buisness
        is caught on pleasure stream
        & my sense trapped
        my soul on a beam
        i hang on your lips
        as if, to say
      `,
    },
    {
      text: `
        another set of children 4 the zoo
        yes, those ones clamber to know
        do as you do, so see them thru
        fizz them up & shake them out
        hold the rabbit, when it's dark
        share the torch, teach the habbit
        they love it, they'll have it, another proud aunt
        harvesting her bees, trying to reunite
        heaven & earth, while on her knees
      `,
    },
    {
      text: `
        you're a muddle
        it's a wonder who's out there
        with eyes that rape
        & a tounge of grape
        take the next one
        it's a miracle what they've done
        with such hands
        those stubs of war
        they press now
        to the core
        where all those
        have been before
      `,
    },
    {
      text: `
        there is two men
        they share some hair
        & in the time of augustus
        may have housed, in a similar den

        their eyes are different, tho
        & in a sense thru
        hated; all in all,
        an admiration for you

        then a lover, now frightened & black
        her steady strength lays a track
        deploy with heart now, my friend
        a man, i'll take you, to the very end
      `,
    },
    {
      text: `
        are you the right man for me
        after all, all you see & are
        linked to at, but not by me
        i see it in my sleep
        a familiar place with nowhere to hide
        someone to kiss but never a bride
        does it do you right, inside
        can you take me out, outside
      `,
    },
    {
      text: `
        sorry i'm not there
        i'm teaching myself
        to not care, not
        trade nor blink, but
        your smile, & the
        rest of it, is making
        me think
      `,
    },
    {
      text: `
        the feeling of earth leaves wa wanting
        & the visions of more shut in
        it's a sad loop found, born without
        everything but we have, evil while
        good mixed with bile, words spoken
        in artifical wind. feelings lost in its
        blades blunt thru, leaving marks
        helping hand, falling down the casm,
        to another land
      `,
    },
    {
      text: `
        i think of you near sleep
        where the son warms & the birds peep
        like a mother making a bed
        wafting the covers above your head
        kissing a touch where you had part
        as i get up, for real
        lingering thru, your feel
        returns in waves, when i'm tired again
      `,
    },
    {
      text: `
        a call, a msg over wire
        2 legs in tandem, 2 alone
        more noise, added to the pile
        later messages; says the phone
        delete that guy he never seemed quite right
        & while you look there
        wishing to die
        just don't cry
        don't cry

        they would've wrote about us
        if you were a bit more like me
        if you had the sense to change speed
        & scrubbed that idea of being free

        stop believing that guy
        he never got it right
        & where you are
        wishing to fly
        just don't cry, don't cry

        a brick flys thru now, but the paper is bare
        her hands had touched once, it felt so good
        but now you're not there, & she crys
        you think she cares
      `,
    },
    {
      text: `
        oh & how it could, could've been
        the next ceasar in cain
        but alas you've wrapped me in chains
        & spat out any unknown good
        for it was not in your design, & what of it?
        if the world did like you, girl we'd be thru
        men would be free while never love
        & all those poor women, go the way of the dove
      `,
    },
    {
      text: `
        the half-pense popstar adjusts his tie
        while the has-been girlfriend, she begins to cry
        zombies surround the stage of a lock of his hair
        & me? i'm barely stood there

        wishing for a keen change somewhere within
        but i believe in us; twin, it only takes a finger or two
        to push down on the throat, make some proper tune
        whose waves'll be felt for days
        like a dying liver, or a failed love
        the feeling a strangling a heart-breasted dove
      `,
    },
    {
      text: `
        pull down now
        all loom, choose
                  loose
        your favourite thing
        
        in all sense at all
        i offer a strong bond
        a man so tall

        an ocean to wade
        nothing but waves
        & kisses, between mine & yours
      `,
    },
    {
      text: `
        some strange part of me is now yours
      `,
    },
    {
      text: `
        thinking, there is nothing better to do
        i could come to you, to warm our bones
        & count our flesh. to sit in silence
        to make on our own accord, without
        other tones, or ghosts. just us
        forever spinning, together
      `,
    },
    {
      text: `
        you must piss, do it now & quietly
        a stream of such intensity
        of returning the little you had, wrapped
        in newspaper, sold by children
        
        you don't understand. it's just a brief break
        before everything is equal again
        but you can't love, not even pass
        but you may feel, & if you can hone in
        on that, you must be real 
      `,
    },
    {
      text: `
        a man once moved my wall, a forgotten
        man. we call him cain; for his sacrafise
        & leave his mother nameless
      `,
    },
    {
      text: `
        it's not fair
        to compare
        any one lover
        to another

        & you are not like
        any other
        nor a lover
        yet

        & your courus touch
        compells me such
        to sit, &
        compare you to nothing

        for your eyes so full
        & body ablaze
        with the beauty
        of life, itself
      `,
    },
    {
      text: `
        another day of the poison nut
        another day another day
        
        i may consume well enougth
        i may love in spurts
        i may create something small
        but nothing to note

        no good love. but that takes 2, sometimes
        making takes one
        no room for poison
        while i am poisoned, but without
        pleanty

        check the fire behaves; according to troy
        cain, & jesus, those great makers of war
        & thought. while i cannot satisfy 1
        little girl, whom has taught me all
        whom i hate, whom asks me to create
        thankyou for this burden,
        i will
      `,
    },
    {
      text: `
        today i have lost; not my lid nor my bottom
        for these make i, for these replaceable blocks
        make castles that wither what i can fear
        their breaths heavy & fair in father's eyes
        he counts them as grains that make up the hour
        that make up the day that creates what i fear
        that i have lost
      `,
    },
    {
      text: `
        she'll take you down to the place where they play
        her sweetheart watches day into day
        & wishes to be someone else, she takes another
        in spite, this one is called her lover
      `,
    },
    {
      text: `
        stand against the wall, on the ground
        your five best friends hath already slain
        themselves, bloodless bodies, no good
        nor sad, not counting what they had
        promise to paint, whit to write
        nor pain to cover up this lonely night

        race against the them, a other
        so hellbent & deformed they'll ignore
        your glory, your life, any story
        in the name of hanging
        in the act of mourning
        without listening or feeling, & the noise you make
        not forgetten nor smelt into any sort of shape

        for it was heard exactly as said
        & you, birthed from what is read
      `,
    },
    {
      text: `
        come up with me, one two four three
        face up, sleep solitude, stay ur hill
        so chug fourth in great rhythm
        have the town hear you loud
        take every last contrarian
        & push them to the ground
      `,
    },
    {
      text: `
        another sound low & constant
        not quite night nor day
        my muscles, my lips contract & shape
        Bethan lays a thousand steps away

        & i continue my search in this pop-up-tent
        for a morsal, a mortal scrape
        of some feather i could take away
        i would hang it up on high display
        i would treasure her deep no matter the day
        i could, but can't for all the feathers i've found
        are bound forever, to a different ground
      `,
    },
    {
      text: `
        whirles & whines in tune of machine
        birds' melodies cut thru, listen
        their plump bodies produce the enigmatic chord
        who learns to do all, but whistle

        her loss again & again
        constraints his solitude
        without meaning both collide
        to produce songs that destroy pride
      `,
    },
    {
      text: `
        have a dream, write it down
        you were man, who stuffed a clown
        come in from behind steady now
        her big led nose trembles, legs reach out
        there was no doubt, she loved it anyhow
        you won't be back though, there's more to film
        more to do, anything
      `,
    },
    {
      text: `
        what pleasure to feel by my own
        would guide me forth, a marching tone
        many untuned, from broken minds
        while mine pretends & whines & whines

        whose pleasure then is subject to seek
        for his next meal & to concure the weak
        frail is brittle & love is long
        true desire is to sing good song
        true pleasure is deire to be strong
      `,
    },
    {
      text: `
        my home lives, on hills & men
        & women who love the green
        as much as i, inherit the
        taste, taste the waster who
        wastes on & on to folk like you
        but see much the same & never
        fear. for the end is far, or close
        truely duelality let you stand &
        die; but my home lives, as do i
      `,
    },
    {
      text: `
        you don't scare me & i don't love you
        though i think about you i don't 
        think of you
      `,
    },
    {
      text: `
        his light is glaring down noe, a thousand tubed bulbs
        those you find in rushed toilets & dingy late night clubs
        your hate will out-shine him despite the murdered kin
        & whenever i begin to describe you i'll have lost where i've been

        i hate my giftless vice but not as i loafe you
        you've given me everything but now i make anew
      `,
    },
    {
      text: `
        don't knock so certainly i'm locked up in a state
        terrified of it getting late
        & praying for that girl, the sun, to find me

        confide in me, as i step back into old ways
        still nervous of all days
        & the monotomy each new one carries

        now i'm feeding limbs thru rented holes
        slowly slowly growing old
        & wishing for that boy, the moon, to cast his wand of pleasure
        that'll make me escape
      `,
    },
    {
      text: `
        the candle's flame burns steady
        it's wax holds her skin
        you study her hairs & naïvely
        enquire where she's been

        she answers hardly with a smile
        & pushes her foot toward your trouser leg
        you hope this lasts a while
        but your inexperianced movement
        shows cracks in the amusements
        
        & her rings start to bleed
        for another mans gents
        now your feeling silly
        now she has you
        
        she'll haunt your dreams 
        for twentyone days
        then you'll see her seem
        & it'll be normal again
      `,
    },
    {
      text: `
        pour that man another drink
        for him & he reluctant to think
        miss the moon & it's blocking grin
        don't think of women, kill kin

        hold the stone of yesterday's drown
        miss carousel threw that clown
        think of her now, with perfect follicles
        she'll stay with you, follow the cues
      `,
    },
    {
      text: `
        i'm waiting, for either her
        love travels far
        miss me dear
                    don't fear
        it comes, allways does
        expect when it doesn't
        even get near

        but trace now you got here
        what men have become
        do you share their bones
        & devow what she's done
        & wish what she'll do
        to you, after she's done
        with them
      `,
    },
    {
      text: `
        when last you opened
        i came, we stood
        & hated once again

        ur perfect mind, the
        steady bum march
        again with everyone

        for they're yours child
        as i am you
        as water flows
        & returns anew
      `,
    },
    {
      text: `
        the man i loved, hath aborted
        their half-baked plan to live anew
        sent them up with holes for hands
        after snorting my lunch, for the tinpot crew

        he who pulls me away from comfort
        turns his back, for me to roll in the grass
        my eyes water when i see her hairs
        but my muscles tear, as i'm dragged & smashed
      `,
    },
    {
      text: `
        child i loved once
        up on the moutains, the musky river
        take my hand, hold your golden mirror, i hate
        you hate i suspect, Isaac
        the next man
        or the one before, i came
        took your foot, the grass, the green, the peace, the pain
        now left with the taste
        once i loved
      `,
    },
    {
      text: `
        gamer gaming gamer game
        who plays 4 time, be so lame
        the keys of life
        easier to make up, than to play
        i play 2 win, just today
      `,
    },
    {
      text: `
        dreams a mean, temperary & gay
        stills of life, common, means to stay a way
        shot of all ambition
        thrown wayward, bright fading candles pass
        fly some time longer, don't transition, don't be crass
        
        they'll love you from afar
        they'll hate from further back
        fuck the noise, avoid the tar, get yourself a snack
      `,
    },
    {
      text: `
        how lovely it would be
        to be controlled by me
        for my fingers to encompass your mind
        for your feet to not need to stand
        
        lay deep now, still
        let the river of dreams widen
        feel a slight thrill
        float down & confiden
      `,
    },
    {
      text: `
        god may make a slip
        sometimes dogs eat their sick
      `,
    },
    {
      text: `
        how horrible to look up at night
        & not know if that's a star, or someone's light
      `,
    },
    {
      text: `
        under her design
        at her pace, at her time
        her restless body, screetching mind
        "tear all you've maden
                            it's burning time"
        
        her gown of armour, her body of red
        she smiles familiarly, it's time for bed

        sit up tight
        take the knife
        take the eyes
        give us the night
      `,
    },
    {
      text: `
        perceive us few
        control me & you
        limbs to bare
        felt everywhere
      `,
    },
    {
      text: `
        a feeling of power, one of dependance
        the allmighty whim, of the common ape
        
        the shrikes sound different 
        but im sure the tone's the same
        the pressure to excite to
        in new kinds of ways

        before the old catch up
        & explode all our fun
        with their broken crys
        of a war never won

        excite me now
        hear my shreek & cry
        in controlled tone
        of a world which may whisper why

        from behind her closed curtains
        within shallower minds
        whose duty to confuse
        cuts thru the wise

        no matter they've died
        it my upmost pleasure
        to have heard their cry
      `,
    },
    {
      text: `
        don't you wish it were yesterday tomorrow
        wish everyone else was sane
        give you all the money
        let me think about the fame
        wish for that lover 
        not to look with such destain
        let you mold her
        into something more sane
        wish to lift your burden
        rid you of your shame
        rid you of any living soul
        who forgets ur name
      `,
    },
    {
      text: `
        stairs keep churning
        weather keeps burning
        matter keeps weaving
        i wish they'd keep it down
        i'm trying to sleep (now)
      `,
    },
    {
      text: `
        one moment
        to change a life
        keep a lookout
        & a steady trife

        cut a flower
        to meand a man
        keep him steady
        to go out again

        flow your river
        free a son
        love & peace
        for everyone

        but keep
        you will see
        without posesion
        is slavery
      `,
    },
  ];

  const TAB_WIDTH = 4;
 
  if (!POEMS.length) return;
 
  const order = POEMS.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
 
  let root = document.getElementById("poem");
  if (!root) {
    root = document.createElement("article");
    root.id = "poem";
    const nav = document.getElementById("nav");
    if (nav) nav.after(root);
    else document.body.prepend(root);
  }
  root.classList.add("poem");
 
  const bodyEl = document.createElement("div");
  bodyEl.className = "poem-body";
  root.replaceChildren(bodyEl);
 
  function expandLeadingTabs(line) {
    return line.replace(/^[ \t]+/, (ws) => {
      let col = 0;
      for (const ch of ws) col = ch === "\t" ? col + TAB_WIDTH - (col % TAB_WIDTH) : col + 1;
      return " ".repeat(col);
    });
  }
 
  function toLines(raw) {
    const lines = String(raw ?? "")
      .replace(/\r\n?/g, "\n")
      .split("\n")
      .map((line) => expandLeadingTabs(line).replace(/[ \t]+$/, ""));
 
    while (lines.length && lines[0] === "") lines.shift();
    while (lines.length && lines[lines.length - 1] === "") lines.pop();
 
    const indents = lines.filter((l) => l !== "").map((l) => l.match(/^ */)[0].length);
    const shared = indents.length ? Math.min(...indents) : 0;
    return lines.map((l) => l.slice(shared));
  }
 
  function renderBody(lines, allowHtml) {
    bodyEl.replaceChildren(
      ...lines.map((line) => {
        const el = document.createElement("span");
        el.className = "poem-line";
        if (line === "") el.classList.add("is-blank");
        else if (allowHtml) el.innerHTML = line;
        else el.textContent = line;
        return el;
      })
    );
  }
 
  let pos = 0;  // where we are in `order`
 
  function show(newPos, updateUrl = true) {
    pos = ((newPos % order.length) + order.length) % order.length;
 
    const n = order[pos];  // which poem, as a position in POEMS
    const poem = POEMS[n];
    renderBody(toLines(poem.text), poem.html === true);
    root.scrollTop = 0;
 
    if (updateUrl) {
      const hash = `#${n + 1}`;
      try {
        history.replaceState(null, "", hash);
      } catch {
        location.replace(hash);  // fallback if a browser blocks replaceState on file://
      }
    }
  }
 
  const step = (d) => show(pos + d);
 
  function hook(el, n, label) {
    if (!el) return;
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.setAttribute("aria-label", label);
    el.addEventListener("click", () => step(n));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        step(n);
      }
    });
  }
 
  hook(document.getElementById("prev_button"), -1, "Previous poem");
  hook(document.getElementById("next_button"), 1, "Next poem");
 
  document.addEventListener("keydown", (e) => {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    if (e.target.closest?.("input, textarea, select, [contenteditable]")) return;
    if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
  });
 
  if (POEMS.length < 2) {
    const arrows = document.querySelector(".picz-arrows");
    if (arrows) arrows.style.display = "none";
  }
 
  // poems.html#12 opens poem 12; with no number, start on a random one.
  function posFromHash() {
    const n = parseInt(location.hash.slice(1), 10);
    return n >= 1 && n <= POEMS.length ? order.indexOf(n - 1) : 0;
  }
 
  window.addEventListener("hashchange", () => {
    const p = posFromHash();
    if (p !== pos) show(p, false);
  });
 
  show(posFromHash(), false);
})();
