# Message Bus ML

<img width="1384" alt="Screenshot 2020-06-01 at 12 53 45 AM" src="https://user-images.githubusercontent.com/261283/83357958-61db1a80-a3a2-11ea-91d4-b39fec94a949.png">

## Syntax

```
queueA > topicB, topicC
queueD > topicE
queueF > topicC
```

Example:

```
billing-engine > order-placed
order-tracking-service > order-placed, order-updates
customer-worker > customer-registered
```

## Demo

[Demo](https://vinhlh.github.io/message-bus-ml/)
