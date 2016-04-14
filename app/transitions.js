export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute(['post-a-move', 'about', 'sign-in', 'user-profile', 'open-moves', 'mover-sign-up']),
    this.use('crossFade'),
    this.reverse('crossFade')
  );
  this.transition(
    this.fromRoute('post-a-move'),
    this.toRoute(['about', 'sign-in', 'user-profile', 'open-moves', 'mover-sign-up']),
    this.use('crossFade'),
    this.reverse('crossFade')
  );
  this.transition(
    this.fromRoute('about'),
    this.toRoute(['post-a-move', 'sign-in', 'user-profile', 'open-moves', 'mover-sign-up']),
    this.use('crossFade'),
    this.reverse('crossFade')
  );
  this.transition(
    this.fromRoute('sign-in'),
    this.toRoute(['post-a-move', 'about', 'user-profile', 'open-moves', 'mover-sign-up']),
    this.use('crossFade'),
    this.reverse('crossFade')
  );
  this.transition(
    this.fromRoute('user-profile'),
    this.toRoute(['post-a-move', 'about', 'sign-in', 'open-moves', 'mover-sign-up']),
    this.use('crossFade'),
    this.reverse('crossFade')
  );
  this.transition(
    this.fromRoute('open-moves'),
    this.toRoute(['post-a-move', 'about', 'sign-in', 'user-profile', 'mover-sign-up']),
    this.use('crossFade'),
    this.reverse('crossFade')
  );
  this.transition(
    this.fromRoute('mover-sign-up'),
    this.toRoute(['post-a-move', 'about', 'sign-in', 'user-profile', 'open-moves']),
    this.use('crossFade'),
    this.reverse('crossFade')
  );
  this.transition(
    this.fromRoute('open-moves'),
    this.toRoute('move-detail'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
