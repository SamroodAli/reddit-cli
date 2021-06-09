#! /usr/bin/env node
import fetch from 'node-fetch'
import open from 'open'
import yargs from 'yargs'

const { argv } = yargs(process.argv)

console.log(argv)

const res = await fetch('https://reddit.com/.json')
const data = await res.json()

const children = data.data.children
const randomIndex = Math.floor(Math.random() * data.data.children.length)
const post = children[randomIndex]
const link = `https://reddit.com${post.data.permalink}`

if (argv.print) {
  console.log(
    `
    title: ${post.data.title}
    link: ${link}
    `
  ) 
} else {
  open(link)
}
