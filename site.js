const ideas = [
  ['Write a note that only you could write.', 'Tell someone exactly what they did and why it mattered to you.'],
  ['Thank the person who gets there first.', 'Think of who opens up, sets things out, or stays late to clean up. Tell them what their work makes possible.'],
  ['Make room at your table.', 'Invite someone who’s new to join you for lunch, a walk, or a coffee. Keep the invitation low-pressure.'],
  ['Follow up on the little thing.', 'Remember something a friend, neighbor, or coworker mentioned recently? Ask how it went, and give them time to answer.'],
  ['Notice the effort.', 'Tell someone what you saw them stick with and what changed because of it. A quick private word can be enough.'],
  ['Send the thank-you you never sent.', 'Think of someone who helped you when they didn’t have to. Send a short message telling them you still remember it.'],
  ['Pick up one small task.', 'Ask a friend, neighbor, or coworker if there’s a small task you can take off their plate. Then do it.']
];

const button = document.querySelector('#shuffle');
if (button) {
  let current = 0;
  button.hidden = false;
  button.addEventListener('click', () => {
    const offset = 1 + Math.floor(Math.random() * (ideas.length - 1));
    current = (current + offset) % ideas.length;
    const [title, description] = ideas[current];
    document.querySelector('#idea-title').textContent = title;
    document.querySelector('#idea-text').textContent = description;
  });
}

document.querySelector('#print')?.addEventListener('click', () => window.print());
